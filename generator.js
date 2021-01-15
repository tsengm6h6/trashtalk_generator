// 隨機取數index
function randomIndex(arr) {
  const index = Math.floor(Math.random() * arr.length)
  return arr[index]
}

function generateTrashTalk(option) {

  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']

  // 取出身分
  let identity = option;
  switch (option) {
    case 'engineer':
      identity = '工程師';
      break;
    case 'designer':
      identity = '設計師';
      break;
    case 'entrepreneur':
      identity = '創業家';
      break;
    default:
      console.log(`No ${option} option`)
  }

  // 如果idenetity是undefine
  if (!identity) {
    return (`<p class='text-center alert-danger' role='alert'>請選擇一個身分!</p>`)
  } else {

    // 取出隨機字串
    const randomTask = randomIndex(task.engineer)
    const randomPhrase = randomIndex(phrase)

    return (`身為一個${identity}，${randomTask}，${randomPhrase}吧！`)
  }

}

module.exports = generateTrashTalk