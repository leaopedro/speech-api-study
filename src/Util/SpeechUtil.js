
class SpeechUtil {
  constructor() {
    console.log("SpeechUtil -> constructor -> 'SpeechUtil'", 'SpeechUtil')
    window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
    const self = this;
    this.lastQuery = '';
    this.isRecording = false;
    this.queryHistory = [];
    this.sound = document.querySelector('.sound.rec');
    this.recognition = new SpeechRecognition();
    this.recognition.onend = () => {
      self.isRecording = false;
    };
  }

  stopRecognition(getResult) {
    if (this.isRecording) {
      if (getResult) {
        this.recognition.stop();
        return;
      }
      this.recognition.abort();
    }
  }

  startRecognition(onResult) {
    if (this.isRecording) return;
    const self = this;
    this.sound.play();
    this.recognition.onresult = (event)=> {
      console.log('onresult');
      self.lastQuery = event.results[0][0].transcript;
      self.queryHistory.push(self.lastQuery);
      this.isRecording = false;
      onResult(self.lastQuery);
    };
    this.isRecording = true;
    this.recognition.start();
  }

}

export default SpeechUtil;