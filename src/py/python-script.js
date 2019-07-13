/*
CS1 Game Engine 
Python Interface
*/

export default `
<script id="mypy" type="text/python">


from browser import window

window.CS1.log('Hello from Python!')

favorite_fruit = 'apple'
window.CS1.log('My favorite fruit is the ' + favorite_fruit + '!')

num1 = 3
num2 = 5
sum = num1 + num2
window.CS1.log('The sum of num1 and num2 is ' + str(sum) + '!')

student = { 'name': 'Mary', 'school': 'Blue High', 'grade': 9 }
window.CS1.log(student['name'] + ' attends ' + student['school'] + '.')


</script>
`