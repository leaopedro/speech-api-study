
class SpeechUtil {
  constructor() {
    window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
    this.lastQuery = '';
    this.queryHistory = [];
    this.sound = document.querySelector('.sound.rec');
    this.recognition = new SpeechRecognition();
  }

  startRecognition(onResult) {
    const self = this;
    this.sound.play();
    this.recognition.onresult = (event)=> {
      self.lastQuery = event.results[0][0].transcript;
      self.queryHistory.push(self.lastQuery);
      onResult(self.lastQuery);
    };
    this.recognition.start();
  }
}

export default SpeechUtil;