const simpleGit = require('simple-git')

const git = simpleGit('/home/symon/acs_git/', { binary: 'git' })

git.add('.').commit(`Comitado em ${new Date().toLocaleDateString()}`)


git.raw(['diff', 'HEAD~1', '/home/symon/acs_git/credenciais/credenciais.csv'], (err, r) => {
    console.log('DIFF')
    console.log(err)
    console.log(r)
    console.log('DIFF')
})
