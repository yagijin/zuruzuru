const permissionCheck = (command: string): boolean => {
  const notPermittedCommands = ['sudo', 'rm', 'cd', 'mkdir', 'cp']
  return notPermittedCommands.includes(command)
}

const levenshteinDistance = (str1: string, str2: string): number => {
  const d: number[][] = []
  for (let i = 0; i <= str1.length; i++) {
    d[i] = []
    d[i][0] = i
  }
  for (let i = 0; i <= str2.length; i++) {
    d[0][i] = i
  }

  let cost = 0
  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      cost = str1[i - 1] === str2[j - 1] ? 0 : 1
      d[i][j] = Math.min(
        d[i - 1][j] + 1,
        d[i][j - 1] + 1,
        d[i - 1][j - 1] + cost
      )
    }
  }
  return d[str1.length][str2.length] / Math.max(str1.length, str2.length)
}

export const onEnter = (
  content: content,
  commandsWithArgs: string[],
  doSL: () => void
): { executed: boolean; message: string[] } => {
  let commands: string[] = []
  if (permissionCheck(commandsWithArgs[0])) {
    commands.push('that operation is not permitted.')
    commands.push('type <help> to see command list.')
  } else if (commandsWithArgs[0] === content.command) {
    if (commandsWithArgs.length > 2) {
      commands.push('invalid number of arguments.')
    } else if (commandsWithArgs.length < 2) {
      commands = content.body[0].text

      switch (content.command) {
        case 'github':
        case 'github.app':
          window.open('https://github.com/yagijin')
          break
        case 'zuruzuru':
        case 'zuruzuru.app':
          window.open('https://zuruzurura.men')
          break
        case 'blog':
        case 'blog.app':
          window.open('https://zuruzurura.men')
          break
        case 'sl':
          doSL()
          break
        default:
      }
    } else {
      // コマンドの引数が一致したらbreakしてその結果を返す
      commands.push('invalid argument.')
      for (let j = 0; j < content.body.length; j++) {
        if (commandsWithArgs[1] === content.body[j].argument) {
          commands = content.body[j].text
          break
        }
      }
    }
  } else {
    return { executed: false, message: [''] }
  }
  return { executed: true, message: commands }
}

export const commandSuggestion = (
  command: string,
  commands: string[]
): string => {
  let min = levenshteinDistance(command, commands[0] ?? '')
  let min_index = 0
  for (let i = 1; i < content.length; i++) {
    const distance = levenshteinDistance(command, commands[i])
    if (min > distance) {
      min_index = i
      min = distance
    }
  }
  if (min < 0.7) {
    return "you'd like to use <" + content[min_index].command + '> ?'
  } else {
    return 'command not found.'
  }
}

type content = {
  command: string
  body: {
    argument: string
    text: string[]
  }[]
}

export const content: content[] = [
  {
    command: 'help',
    body: [
      {
        argument: '',
        text: [
          'You can use following commands, ',
          'ls -- list directory contents.',
          'cat <filename> -- browse text file.',
          '*.app -- open new tab.',
        ],
      },
    ],
  },
  {
    command: 'cat',
    body: [
      {
        argument: '',
        text: ['<cat> needs <filename> as argument.'],
      },
      {
        argument: 'award.txt',
        text: [
          '🎊Awards in Hackathon🎊',
          '- HackU2019Nagoya => Happy hacking award',
          '- KonicaMinoltaHackathon2019 => Jury special award',
          '- OthloHack2019 => Cookpad award',
          '- JPHACKS2019 => Finalist, Innovator Certification, Other 3 awards',
          '- GeospatialHackersProgram2020 => Tokai competition champions',
        ],
      },
      {
        argument: 'profile.txt',
        text: [
          'name     => yagijin',
          'job      => web developer',
          'skill    => JavaScript, TypeScript, TOEIC720',
          'favorite => 🏕 🚲 🍜 🏸 🏐 🧙 ☖ ♞ ⚆ 🎴 🎲🎲',
        ],
      },
    ],
  },
  {
    command: 'zuruzuru.app',
    body: [
      {
        argument: '',
        text: ['You opened new window.'],
      },
    ],
  },
  {
    command: 'zuruzuru',
    body: [
      {
        argument: '',
        text: ['You opened new window.'],
      },
    ],
  },
  {
    command: 'github.app',
    body: [
      {
        argument: '',
        text: ['You opened new window.'],
      },
    ],
  },
  {
    command: 'github',
    body: [
      {
        argument: '',
        text: ['You opened new window.'],
      },
    ],
  },
  {
    command: 'blog.app',
    body: [
      {
        argument: '',
        text: ['You opened new window.'],
      },
    ],
  },
  {
    command: 'blog',
    body: [
      {
        argument: '',
        text: ['You opened new window.'],
      },
    ],
  },
  {
    command: 'ls',
    body: [
      {
        argument: '',
        text: ['award.txt　blog.app　github.app　profile.txt　zuruzuru.app'],
      },
    ],
  },
  {
    command: 'sl',
    body: [
      {
        argument: '',
        text: ['you should use <ls> instead of <sl>.'],
      },
    ],
  },
  {
    command: 'whoami',
    body: [
      {
        argument: '',
        text: ['you are you.'],
      },
    ],
  },
  {
    command: 'man',
    body: [
      {
        argument: '',
        text: ['<man> needs <command name> as argument.'],
      },
      {
        argument: 'ls',
        text: [
          'display a file list of current directory.',
          'you can use like "ls".',
          'no arguments needed.',
        ],
      },
      {
        argument: 'sl',
        text: [
          'display animations aimed to correct users who accidentally enter <sl> instead of <ls>.',
          'you can use like "sl".',
          'no arguments needed.',
        ],
      },
      {
        argument: 'cat',
        text: [
          'display txt file on the console.',
          'you can use like "cat profile.txt".',
          '<filename> is needed as an argument.',
        ],
      },
      {
        argument: 'whoami',
        text: [
          'display your <username>.',
          'you can use like "whoami".',
          'no arguments needed.',
        ],
      },
      {
        argument: 'help',
        text: [
          'display a list of commands you can use.',
          'you can use like "help".',
          'no arguments needed.',
        ],
      },
      {
        argument: 'man',
        text: [
          'display a manual of command.',
          'you can use like "man help".',
          '<command name> is needed as an argument.',
        ],
      },
    ],
  },
]
