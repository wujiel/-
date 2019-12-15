		var box = document.getElementById("box");
		var oNavlist = document.getElementById("nav").children;
		var slider = document.getElementById("slider");
		var left = document.getElementById("left");
		var right = document.getElementById("right");
		var inter = 1;
		var ismoving = false;
		var timer;

		function next(){
			if(!ismoving){
				ismoving = true;
				inter++;
				navChange();
				animate(slider,{left: -1200*inter}, function(){
					if(inter === 6){
						slider.style.left = "-1200px";
						inter = 1; 
					}
					ismoving = false;
				});
			}
		}

		function former(){
			if(!ismoving){
				ismoving = true;	
				inter--;
				navChange();
				animate(slider,{left:-1200*inter},function(){
					if(inter === 0){
						slider.style.left = "-6000px";
						inter = 5;
					}
					ismoving = false;	
				});
			}
		}

		timer = setInterval(next, 3000);

		box.onmouseover = function(){
			animate(left,{opacity: 50});
			animate(right,{opacity: 50});
			clearInterval(timer);
		}

		box.onmouseout = function(){
			animate(left,{opacity:0});
			animate(right,{opacity:0});
			timer = setInterval(next, 3000);
		}

		right.onclick = next;
		left.onclick = former;

		for(var i = 0; i < oNavlist.length; i ++){
			oNavlist[i].idx = i;
			oNavlist[i].onclick = function(){
				inter = this.idx + 1;
				navChange();
				animate(slider,{left: -1200*inter});
			}
		}

		function navChange(){
			for(var i = 0; i < oNavlist.length; i ++){
				oNavlist[i].className = "";
			}

			if(inter === 6){
				oNavlist[0].className = 'active';
			} else if(inter === 0){
				oNavlist[4].className = 'active';
			} else{
				oNavlist[inter - 1].className = 'active';
			}
		}

		var warn = document.getElementById("warn");
		var left1 = 1100;
		var ti = setInterval(frame1,10);
		function frame1(){
			if(left1 == -410){
				left1 = 1100;
			}
			else{
				left1 -= 1;
				warn.style.left = left1 + 'px';
			}
		}