// trigger to play music in the background with sweetalert
window.addEventListener('load', () => {
    Swal.fire({
        title: 'Do you want to play music in the background?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
    }).then((result) => {
        if (result.isConfirmed) {
          document.getElementById('bg-audio').play();
            animationTimeline();
        } else {
            animationTimeline();
        }
    });
});

// animation timeline
const animationTimeline = () => {
    const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
    const hbd = document.getElementsByClassName("wish-hbd")[0];

    textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
        .split("")
        .join("</span><span>")}</span>`;

    hbd.innerHTML = `<span>${hbd.innerHTML
        .split("")
        .join("</span><span>")}</span>`;

    const ideaTextTrans = {
        opacity: 0,
        y: -20,
        rotationX: 5,
        skewX: "15deg"
    }

    const ideaTextTransLeave = {
        opacity: 0,
        y: 20,
        rotationY: 5,
        skewX: "-15deg"
    }

    const tl = new TimelineMax();

    tl.to(".container", 0.6, { visibility: "visible" })
        .from(".one", 0.7, { opacity: 0, y: 10 })
        .from(".two", 0.4, { opacity: 0, y: 10 })
        .to(".one", 0.7, { opacity: 0, y: 10 }, "+=1.5")
        .to(".two", 0.7, { opacity: 0, y: 10 }, "-=1")
        .from(".three", 0.7, { opacity: 0, y: 10 })
        .to(".three", 0.7, { opacity: 0, y: 10 }, "+=1.0")
        .from(".four", 0.7, { scale: 0.2, opacity: 0 })
        .from(".fake-btn", 0.3, { scale: 0.2, opacity: 0 })
        .staggerTo(".hbd-chatbox span", 0.3, { visibility: "visible" }, 0.01)
        .to(".fake-btn", 0.1, { backgroundColor: "rgb(127, 206, 248)" }, "+=0.5")
        .to(".four", 0.3, { scale: 0.2, opacity: 0, y: -150 }, "+=0.5")
        .from(".idea-1", 0.7, ideaTextTrans)
        .to(".idea-1", 0.7, ideaTextTransLeave, "+=2.5")
        .from(".idea-2", 0.7, ideaTextTrans)
        .to(".idea-2", 0.7, ideaTextTransLeave, "+=2.5")
        .from(".idea-3", 0.7, ideaTextTrans)
        .to(".idea-3 strong", 0.5, {
            scale: 1.2,
            x: 10,
            backgroundColor: "rgb(21, 161, 237)",
            color: "#fff",
        })
        .to(".idea-3", 0.7, ideaTextTransLeave, "+=2.5")
        .from(".idea-4", 0.7, ideaTextTrans)
        .to(".idea-4", 0.7, ideaTextTransLeave, "+=2.5")
        .from(".idea-5", 0.4, {
            rotationX: 15,
            rotationZ: -10,
            skewY: "-5deg",
            y: 50,
            z: 10,
            opacity: 0,
        }, "+=0.5")
        .to(".idea-5 span", 0.7, { rotation: 90, x: 8 }, "+=0.5")
        .to(".idea-5", 0.7, { scale: 0.2, opacity: 0 }, "+=0.3")
        .staggerFrom(".idea-6 span", 0.4, {
            scale: 3,
            opacity: 0,
            rotation: 15,
            ease: Expo.easeOut,
        }, 0.2)
        .staggerTo(".idea-6 span", 0.4, {
            scale: 3,
            opacity: 0,
            rotation: -15,
            ease: Expo.easeOut,
        }, 0.2, "+=.5")
        .staggerFromTo(".baloons img", 1.7, {
            opacity: 0.9,
            y: 1400,
        }, {
            opacity: 1,
            y: -1000,
        }, 0.2)
        .from(".profile-picture", 0.5, {
            scale: 3.5,
            opacity: 0,
            x: 25,
            y: -25,
            rotationZ: -45,
        }, "-=3")
        .from(".hat", 0.5, {
            x: -100,
            y: 350,
            rotation: -180,
            opacity: 0,
        }).add(() => {
    launchConfetti();
})

        .staggerTo(".image-card", 0.6, {
    opacity: 1,
    y: 0,
    ease: Power3.easeOut
}, 0.2).add(() => {
    document.querySelectorAll('.image-card').forEach(card => {
        card.classList.remove('disabled');
    });
})

.staggerTo(".clock-container", 0.6, {
opacity: 1,
y: 0,
ease: Power3.easeOut
}, 0.2)

        .staggerFrom(".wish-hbd span", 0.5, {
            opacity: 0,
            y: -50,
            rotation: 150,
            skewX: "30deg",
            ease: Elastic.easeOut.config(1, 0.5),
        }, 0.08)
        .staggerFromTo(".wish-hbd span", 0.5, {
            scale: 1.4,
            rotationY: 150,
        }, {
            scale: 1,
            rotationY: 0,
            color: "#ff69b4",
            ease: Expo.easeOut,
        }, 0.1, "party")
        .from(".wish h5", 0.5, {
            opacity: 0,
            y: 10,
            skewX: "-15deg",
        }, "party")
        .staggerTo(".eight svg", 0.5, {
            visibility: "visible",
            opacity: 0,
            scale: 80,
            repeat: 3,
            repeatDelay: 1.4,
        }, 0.3)
        // .to(".six", 0.5, {
        //     opacity: 0,
        //     y: 30,
        //     zIndex: "-1",
        // })
        .to(".seven_vp", 0.5, {
            opacity: 0,
            y: 30,
            zIndex: "-1",
        })
        .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
        .to(".last-smile", 0.5, {
            rotation: 90,
        }, "+=0.5");

    // Replay button
    const replyBtn = document.getElementById("replay");
    replyBtn.addEventListener("click", () => {
        tl.restart();
    });
}

// Flip card on click
const bgAudio = document.getElementById('bg-audio');

const cardAudios = [
    document.getElementById('card1-audio'),
    document.getElementById('card2-audio'),
    document.getElementById('card3-audio'),
    document.getElementById('card4-audio')
];

document.querySelectorAll('.image-card').forEach((card, index) => {
    const imageInner = card.querySelector('.image-inner');

    card.addEventListener('mouseenter', () => {
        imageInner.classList.add('flipped');

        // Pause bg music
        if (!bgAudio.paused) {
            bgAudio.pause();
        }

        // Stop all other card audios
        cardAudios.forEach((audio, i) => {
            if (i !== index) {
                audio.pause();
                audio.currentTime = 0;
            }
        });

        // Play current card audio
        cardAudios[index].currentTime = 0;
        cardAudios[index].play();
    });

    card.addEventListener('mouseleave', () => {
        imageInner.classList.remove('flipped');

        // Pause current card audio
        // cardAudios[index].pause();
        // cardAudios[index].currentTime = 0;
        //
        // // Resume bg music
        // bgAudio.play();
    });
});


function startCountdown(targetDateStr) {
  const targetDate = new Date(targetDateStr).getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
      ['days', 'hours', 'minutes', 'seconds'].forEach(unit => {
        document.getElementById(`clock-${unit}`).textContent = '00';
      });
      clearInterval(timerInterval);
      return;
    }

    const days = String(Math.floor(timeLeft / (1000 * 60 * 60 * 24))).padStart(2, '0');
    const hours = String(Math.floor((timeLeft / (1000 * 60 * 60)) % 24)).padStart(2, '0');
    const minutes = String(Math.floor((timeLeft / (1000 * 60)) % 60)).padStart(2, '0');
    const seconds = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, '0');

    document.getElementById('clock-days').textContent = days;
    document.getElementById('clock-hours').textContent = hours;
    document.getElementById('clock-minutes').textContent = minutes;
    document.getElementById('clock-seconds').textContent = seconds;
  }

  const timerInterval = setInterval(updateCountdown, 1000);
  updateCountdown();
}

// Example: Countdown to April 20, 2025
function createCelebEffect() {
  const clock = document.querySelector('.clock-container');
  const emojis = ['💖', '💘', '💞', '💓', '💗'];

  clock.addEventListener('mouseenter', () => {
    for (let i = 0; i < 10; i++) {
      const celeb = document.createElement('div');
      celeb.className = 'celebs';
      celeb.textContent = emojis[Math.floor(Math.random() * emojis.length)];

      celeb.style.left = `${Math.random() * clock.offsetWidth}px`;
      celeb.style.top = `${Math.random() * clock.offsetHeight}px`;
      clock.appendChild(celeb);

      setTimeout(() => {
        celeb.remove();
      }, 1500);
    }
  });
}

createCelebEffect();


// Example target: April 20, 2025 at 00:00
startCountdown('2025-04-26T14:00:00');
function launchConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const confetti = canvas.getContext('2d');
    const pieces = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for (let i = 0; i < 150; i++) {
        pieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 8 + 4,
            speed: Math.random() * 3 + 2,
            color: `hsl(${Math.random() * 360}, 70%, 60%)`,
            angle: Math.random() * 360,
            spin: Math.random() * 0.2 - 0.1
        });
    }

    function draw() {
        confetti.clearRect(0, 0, canvas.width, canvas.height);
        for (let piece of pieces) {
            piece.y += piece.speed;
            piece.angle += piece.spin;
            if (piece.y > canvas.height) {
                piece.y = -piece.size;
            }
            confetti.save();
            confetti.translate(piece.x, piece.y);
            confetti.rotate(piece.angle);
            confetti.fillStyle = piece.color;
            confetti.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size);
            confetti.restore();
        }
        requestAnimationFrame(draw);
    }

    draw();
}
