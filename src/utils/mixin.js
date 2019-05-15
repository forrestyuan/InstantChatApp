export default {
    methods:{
        getTime(lastTime=0){
            let curTime = new Date();
            let year = curTime.getFullYear();
            let mon = curTime.getMonth()+1;
                mon = mon > 9 ? mon : '0'+mon;
            let day = curTime.getDate();
                day = day > 9 ? day : '0'+ day;
            let h = curTime.getHours();
                h = h > 9 ? h : '0'+ h;
            let m = curTime.getMinutes();
                m = m > 9 ? m : '0'+ m;
            if(curTime.getTime() - new Date(lastTime).getTime() > 3000000){
              return {time:`${year}年${mon}月${day}日  ${h}:${m}`, curTime:curTime.getTime}
            }
        }
    }
}