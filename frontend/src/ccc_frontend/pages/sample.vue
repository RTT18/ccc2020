<template>
    <div>
        <div class="search">
            <input type="text" v-model="keyword">
            <button @click="getBooks">検索</button>
        </div>
        <div v-for="item in books.items" :key="item.id">
            <div class="thumb">
                <img v-if="item.volumeInfo.imageLinks" :src="item.volumeInfo.imageLinks.thumbnail" alt="">
                <div class="no-photo" v-else>No Photo</div>
            </div>
            <div class="content">
                <div class="title">{{item.volumeInfo.title}}</div>
                <div class="page" v-if="item.volumeInfo.pageCount">{{item.volumeInfo.pageCount}}</div>
                <div class="no-page" v-else>Page None</div>
            </div>
        </div>
    </div>
</template>

<script src="https://apis.google.com/js/api.js"></script>
<script lang='ts'>
import Vue from 'vue'

const API_KEY = process.env.GoogleCalendarAPI_KEY

export default Vue.extend({
    data(){
        return{
            books:{},
            keyword: "vue"
        }
    },
    methods: {
        getBooks(){
            fetch("https://www.googleapis.com/books/v1/volumes?q=intitle:" + this.keyword)
            .then(res=>{
                if(res.ok){
                    return res.json();
                }
            })
            .then(res=>{
                this.books = res;
                console.log(this.books)
            })
        },
        start(){
        }
    },
    mounted(){
        this.getBooks()
    }
})
</script>

<style scoped>
    .book{
        display: flex;
    }

</style>