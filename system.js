//Design a class for shuffling a list of n songs in such a way that each song is not played for next k times. 

// S1, s2, …. S10
// K = 2

// Shuffle -> s3
// Shuffle -> s7
// Shuffle -> s4
// Shuffle -> s3

class Song {
    constructor(list , k){
        this.list = list
        this.k = k
        this.random = [...list]
        this.alreadyPlayed =[]
    }

    suffle(){
       let song = this.random.shift() // returning index =0 
       let obj = {
        song : song , 
        count : this.k
       }
       this.alreadyPlayed.push(obj)
       const newSong = this.alreadyPlayed.filter((e) => e.cont ===0 ).map(e => e.song)
       this.alreadyPlayed =  this.alreadyPlayed.map((e) => {
        if(e.song !== obj.song){
            e.count = e.count-1
            return e 
        }
       })
       this.random = [...this.random , ...newSong]
       return song 
    }

 }