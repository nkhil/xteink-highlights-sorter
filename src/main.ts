import fs from 'node:fs'

const data = fs.readFileSync('data.txt').toString('utf8')

const splitData = data.split('==========')

const cache: Record<string, Array<string>> = {}

for (const d of splitData) {
  const potentialTitles = d.split('\n')
  const { title, index: titleIndex } = inferTitle(potentialTitles)
  if (cache[title]) {
    const body = potentialTitles.slice(titleIndex + 1)
    cache[title].push(...body)
  } else {
    cache[title] = []
  }
}

function inferTitle(potentialTitles: Array<string>): { title: string, index: number } {
  let title = ''
  let index: number | undefined
  if (potentialTitles[0].length > 0) {
    title = potentialTitles[0]
    index = 0
  } else {
    title = potentialTitles[1]
    index = 1
  }

  return { title, index }
}


