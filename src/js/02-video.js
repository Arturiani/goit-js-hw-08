import Player from '@vimeo/player'
import throttle from 'lodash/throttle'

const videoRef = document.querySelector('iframe')

const player = new Player(videoRef)

function addTime(data) {
    let time = data.seconds
    localStorage.setItem("videoplayer-current-time", time)
}

player.on('timeupdate', throttle(addTime, 1000))


const startTime = localStorage.getItem("videoplayer-current-time")
player.setCurrentTime(startTime)