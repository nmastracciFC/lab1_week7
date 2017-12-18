var video = {

	videoPlayer : document.querySelector('video'),
	vidThumbs : document.querySelectorAll('.vid-thumb'),
	volumeIndicator: document.querySelector('.vol-indicator'),


	volOn() {
		//have to start at the root object (namespace) name
		video.videoPlayer.muted = false;
		video.volumeIndicator.classList.replace('fa-volume-off', 'fa-volume-up');
		// console.log("on");
	},

	volOff() {
		//have to start at the root object (namespace) name
		video.videoPlayer.muted = true;
		video.volumeIndicator.classList.replace('fa-volume-up', 'fa-volume-off');
		// console.log("off");
	},

	popOverlay() {
		let overlay = document.querySelector('.vid-overlay');
		overlay.classList.add('show-overlay');

		overlay.querySelector('i').addEventListener('click', video.replayVideo, false);
	},

	replayVideo() {
		video.videoPlayer.currentTime = 0;
		video.videoPlayer.play();

		let overlay = document.querySelector('.vid-overlay');
		overlay.classList.remove('show-overlay');
	},

	fetchVideoThumbs(){
		const url = './includes/functions.php?getVideos=true';

		fetch(url)
			.then((resp) => resp.json())//convert result to json
			.then((data) => {video.loadVideoThumbs(data);})
			.catch(function(error) {
				console.log(error);
			});

		let overlay = document.querySelector('.vid-overlay');
		overlay.classList.remove('show-overlay');

		video.volOn();

	},

	loadVideoThumbs(data) {
		// debugger;
		let thumbHolder = document.querySelector('.video-thumbs');

		data.forEach(thumb => {
			//JS template string needs the back tick
			let docFrag = `<li class="vid-thumb" role="button" data-videopath="${thumb.path}">
          					<img src="images/${thumb.placeholder}" alt="mini commercial" class="responsive">
        					</li>`;
        	//data-videopath is the field that has the database file name?

        	thumbHolder.innerHTML += docFrag;
        	//+= is an assignment operator
		})
		//orange coloured 'thumb' refers to current list element
		thumbHolder.querySelectorAll('li').forEach((thumb) => thumb.addEventListener('click', video.loadNewVideo));

	},

	loadNewVideo() {
		// debugger;
		let videoPath = "video/" + this.dataset.videopath;
		//every list item has an attribute called videopath so you collect them all set the source

		video.videoPlayer.src = videoPath;
		video.videoPlayer.load();
		video.videoPlayer.play();

	},


	init() {
		console.log('video module added');
		video.videoPlayer.addEventListener('mouseover', video.volOn, false);
		video.videoPlayer.addEventListener('mouseout', video.volOff, false);
		video.videoPlayer.addEventListener('ended', video.popOverlay, false);

		video.fetchVideoThumbs();
	}



}

video.init();