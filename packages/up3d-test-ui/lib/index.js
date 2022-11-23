import Button from './Button/index.vue';
const comments =[Button];
const install = (app)=>{
    comments.forEach(c=>{
        console.log(c,app)
        app.component(c.name,c)
    })
    return app
}
export {
    Button
}
export default {
    install
}