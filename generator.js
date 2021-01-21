// get random index
function randomIndex(arr) {
  const index = Math.floor(Math.random() * arr.length)
  return arr[index]
}

function generateTrashTalk(option) {

  const task = {
    engineer: {
      profession: '工程師',
      phrase: ['加個按鈕', '加新功能', '切個版', '改一點 code']
    },
    designer: {
      profession: '設計師',
      phrase: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計']
    },
    entrepreneur: {
      profession: '創業家',
      phrase: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
    }
  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']

  // If the user didn't choose a profession then return warning
  if (!task[option]) {
    return (`<p class='text-center alert-danger' role='alert'>請選擇一個身分!</p>`)
  } else {
    // get random phrase
    const randomTask = randomIndex(task[option].phrase)
    const randomPhrase = randomIndex(phrase)

    return (`身為一個${task[option].profession}，${randomTask}，${randomPhrase}吧！`)
  }

}
// export as a module
module.exports = generateTrashTalk