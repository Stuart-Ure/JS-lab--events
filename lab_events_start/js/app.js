document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const title =document.getElementById("title")
  title.addEventListener('input', handleInputTitle)

  const author = document.getElementById("author")
  author.addEventListener('input', handleInputAuthor)

  const category = document.getElementById("category")
  category.addEventListener('change', handleSelectChange)

  const form = document.getElementById("new-item-form")
  form.addEventListener('submit', handleFormSubmit)
  


})

const handleInputTitle = function (event){
  // console.log (event)
  const inputText = event.target.value
  const inputResult= document.getElementById("title-result")
  inputResult.textContent= inputText
  console.log (inputResult.textContent)
}

const handleInputAuthor = function (event){
  const inputResult = document.getElementById("author-result")
  // console.log (event)
  const inputText = event.target.value
  inputResult.textContent= inputText
  console.log (inputResult.textContent)
}

const handleSelectChange = function(event){
  const selectedOption =event.target.value
  const selectResult = document.getElementById('category-result')

  selectResult.textContent = selectedOption
}

const handleFormSubmit = function (event){
  event.preventDefault()
  form.reset()
  // const title = event.target[0].value
  // const inputResultTitle = document.getElementById("title-result")
  // inputResultTitle = title
  console.log(title)
}