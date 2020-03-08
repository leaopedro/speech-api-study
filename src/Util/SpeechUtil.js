class SpeechUtil {
  constructor() {
    console.log("SpeechUtil -> constructor -> 'SpeechUtil'", "SpeechUtil");
    window.SpeechRecognition =
      window.webkitSpeechRecognition || window.SpeechRecognition;
    const self = this;
    this.lastQuery = "";
    this.isRecording = false;
    this.queryHistory = [];
    this.recognition = new SpeechRecognition();
  }

  stopRecognition(getResult) {
    console.log("SpeechUtil -> stopRecognition -> stopRecognition");
    if (this.isRecording) {
      if (getResult) {
        this.recognition.stop();
        return;
      }
      this.recognition.abort();
    }
  }

  startRecognition(onResult) {
    console.log("SpeechUtil -> startRecognition -> startRecognition");
    if (this.isRecording) return;
    const sound = document.querySelector(".sound.rec");
    if (sound && sound.play) sound.play();
    const self = this;
    const end = event => {
      self.lastQuery = event.results[0][0].transcript;
      self.queryHistory.push(self.lastQuery);
      this.isRecording = false;
      onResult(self.lastQuery);
    };
    this.recognition.onend = end;
    this.recognition.onresult = end;
    this.isRecording = true;
    this.recognition.start();
    return { stop: this.stopRecognition };
  }
}

export default SpeechUtil;
