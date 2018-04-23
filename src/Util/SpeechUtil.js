
class SpeechUtil {
  constructor() {
    window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
    const self = this;
    this.lastQuery = '';
    this.queryHistory = [];
    this.sound = document.querySelector('.sound.rec');
    this.recognition = new SpeechRecognition();
    this.recognition.onresult = (event)=> {
      self.lastQuery = event.results[0][0].transcript;
      self.queryHistory.push(self.lastQuery);
      //trigger event
    }
  }

  startRecognition() {
    this.sound.play();
    this.recognition.start();

  }
}

export default SpeechUtil;