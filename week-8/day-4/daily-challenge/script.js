class Video{
    constructor(title, uploader, time){
        this.title = title,
        this.uploader = uploader,
        this.time = time
    }
    watch(){
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}`);
    }
    data(){
        return [[this.title] , [this.uploader] , [this.time]]
    }
}
// const instance1 = new Video('video_title','uploader_name', 200);
// const instance2 = new Video('video_title2','uploader_name2', 300);
// const instance3 = new Video('video_title3','uploader_name3', 400);
// const instance4 = new Video('video_title4','uploader_name4', 500);
// const instance5 = new Video('video_title5','uploader_name5', 600);


// const arr = [instance1.data()];

// console.log(arr);
const arr = [
    ['title1', 'uploader1' ,1], 
    ['title2', 'uploader2' ,2], 
    ['title3', 'uploader3' ,3], 
    ['title4', 'uploader4' ,4], 
    ['title5', 'uploader5' ,5]
];
arr.forEach((item)=>{
    instance = new Video(item[0],item[1],item[2])
    console.log(instance.data());
})