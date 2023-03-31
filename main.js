function save(){
setTimeout()
setTimeout2()
setTimeout3()
}
setTimeout(function(){
image_id = "selfie1"
take_snapshot()
speakdata = "Taking Selfie in 5 seconds"
utterThis = SpeechSynthesisUtterance(speakdata)
synth.speak(utterThis)

}, 5000)

setTimeout2(function(){
    image_id = "selfie2"
    take_snapshot()
    speakdata = "Taking Selfie in 5 seconds"
    utterThis = SpeechSynthesisUtterance(speakdata)
    synth.speak(utterThis)
    
    }, 10000)
    
 setTimeout3(function(){
    image_id = "selfie2"
    take_snapshot()
    speakdata = "Taking Selfie in 15 seconds"
        utterThis = SpeechSynthesisUtterance(speakdata)
        synth.speak(utterThis)
        
        }, 15000)

        function take_snapshot()
        {
            console.log(image_id)

            Webcam.snap(function(data_uri){
                if(img_id=="selfie1"){
                    document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>'
                }
                if(img_id=="selfie2"){
                    document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>'
                }
                if(img_id=="selfie3"){
                    document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>'
                }
            })
        }