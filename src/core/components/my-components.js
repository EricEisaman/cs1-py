export default (()=>{
  
  document.addEventListener('gameStart',e=>{
  
     CS1.log('Hello');
  
  });
  

  
  AFRAME.registerComponent('my-first-component', {
    schema:{
      color:{type:'color',default:'#fff'}
    },
    
    init: function () {
      
      let self = this;
         
    }
    
    
  });

})()