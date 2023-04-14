import Browser from 'webextension-polyfill'
import { ofetch } from 'ofetch'

export type PromptRole = 'system' | 'user'
export interface Prompt {
  id: string
  title: string
  prompt: string
  role: PromptRole
}

export async function loadLocalPrompts() {
  const { prompts: value } = await Browser.storage.local.get('prompts')
  return (value || []) as Prompt[]
}

export async function saveLocalPrompt(prompt: Prompt) {
  const prompts = await loadLocalPrompts()
  let existed = false
  for (const p of prompts) {
    if (p.id === prompt.id) {
      p.title = prompt.title
      p.prompt = prompt.prompt
      p.role = prompt.role
      existed = true
      break
    }
  }
  if (!existed) {
    prompts.unshift(prompt)
  }
  await Browser.storage.local.set({ prompts })
  return existed
}

export async function removeLocalPrompt(id: string) {
  const prompts = await loadLocalPrompts()
  await Browser.storage.local.set({ prompts: prompts.filter((p) => p.id !== id) })
}

export async function loadRemotePrompts() {
  return ofetch<Prompt[]>('https://chathub.gg/api/community-prompts').catch((err) => {
    console.error('Failed to load remote prompts', err)
    return []
  })
}
