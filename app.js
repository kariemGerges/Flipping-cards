new Vue({
    el: "#flashcards-app",
    data: {
        cards:[
            {
                question:"What year was IUPUI founded?",
                answer:"1969",
                category:"history",
                flipped:false
            },
            {
                question:"What is 2+2?",
                answer:"Fish",
                category:"math",
                flipped:false
            },
            {
                question:"Is mayonnaise an instrument?",
                answer:"No",
                category:"science",
                flipped:false
            }
        ],
        form:{
            question:"",
            answer:"",
            category:"",
            flipped:false
        },
        mounted(){
            if (localStorage.getItem('cards')){
                this.cards = JSON.parse(localStorage.getItem('cards'))
            }
        },
        watch:{
            cards(form){
                localStorage.cards = form;
            }
        }
    },
    methods:{
        flip:function (i) {
            document.getElementById('q'+i).className = "hide";
            document.getElementById('a'+i).className -= "hide";
        },

        unflip:function (i) {
            document.getElementById('q'+i).className -= "hide";
            document.getElementById('a'+i).className = "hide";

        },
        submit:function () {
            if (this.form.question === ""
                || this.form.answer ===""
                || this.form.category === ""){
                alert("One or more FIELDS is missing")
            }
            else{
                this.cards.push(this.form);
                this.form={
                    question:"",
                    answer:"",
                    category:"",
                    flipped:false
                }
                this.saveCards();
            }
        },
        saveCards(){
            let card = JSON.stringify(this.cards);
            localStorage.setItem('cards', card);
        }
    }
})