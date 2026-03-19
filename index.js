<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Aakansha | Funky Resume</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg1:#1f1c2c; --bg2:#928dab; --card:rgba(255,255,255,0.1);
      --text:#ffffff; --accent:#ffd369; --cta:#ff4b5c;
    }
    body.light {
      --bg1:#f5f7fa; --bg2:#c3cfe2; --card:rgba(0,0,0,0.06);
      --text:#111; --accent:#ff7a18; --cta:#6c5ce7;
    }
    *{box-sizing:border-box}
    body {
      margin:0; font-family:'Poppins',sans-serif; color:var(--text);
      background: linear-gradient(135deg, var(--bg1), var(--bg2)); overflow-x:hidden;
    }
    canvas#bg {position:fixed; inset:0; z-index:-1}
    .container{padding:60px 20px; text-align:center}
    h1{font-size:3rem; margin:0}
    h2{color:var(--accent); margin-top:8px}
    .card{background:var(--card); margin:20px auto; padding:22px; border-radius:18px; width:min(900px,90%); backdrop-filter: blur(12px); box-shadow:0 10px 30px rgba(0,0,0,0.25)}
    .skills span{display:inline-block; background:var(--accent); color:#000; padding:8px 12px; border-radius:20px; margin:6px; font-size:.9rem}
    .btn{margin:16px; padding:14px 26px; font-size:1.05rem; background:var(--cta); color:#fff; border:none; border-radius:30px; cursor:pointer; transition:.25s}
    .btn:hover{transform:translateY(-2px) scale(1.04)}
    .row{display:grid; grid-template-columns:1fr; gap:14px}
    .projects a{display:block; padding:12px; border-radius:12px; background:rgba(255,255,255,0.08); text-decoration:none; color:var(--text)}
    .topbar{position:fixed; right:16px; top:16px}
    .toggle{padding:10px 14px; border-radius:20px; border:none; cursor:pointer}
    .typing{border-right:2px solid var(--accent); white-space:nowrap; overflow:hidden}
    @media(min-width:768px){.row{grid-template-columns:1fr 1fr}}
  </style>
</head>
<body>
  <canvas id="bg"></canvas>

  <div class="topbar">
    <button class="toggle" onclick="toggleMode()">Toggle Theme</button>
  </div>

  <div class="container">
    <h1>Hey, I'm Aakansha 👋</h1>
    <h2 class="typing" id="typing"></h2>

    <div class="card">
      <h2>About Me</h2>
      <p>I build scalable systems, play with AI, and turn ideas into products. Backend, GenAI, and product thinking—combined.</p>
    </div>

    <div class="card">
      <h2>Experience</h2>
      <p>• Software Engineer @ Freelance<br>• Intern @ Parkview Health<br>• Full Stack Developer @ IBM</p>
    </div>

    <div class="card skills">
      <h2>Skills</h2>
      <span>Python</span><span>Java</span><span>Spring Boot</span><span>FastAPI</span><span>React</span><span>AWS</span><span>GenAI</span><span>SQL</span>
    </div>

    <div class="card projects">
      <h2>Projects</h2>
      <div class="row">
        <a href="https://github.com/yourusername/ai-assistant" target="_blank">🤖 AI Assistant (RAG + GenAI)</a>
        <a href="https://github.com/yourusername/quiz-app" target="_blank">🧠 Quiz App (Full Stack)</a>
        <a href="https://github.com/yourusername/rathburn" target="_blank">📊 Rathburn (Analytics)</a>
        <a href="https://github.com/yourusername/seavac" target="_blank">🌊 Seavac (ML Project)</a>
      </div>
    </div>

    <button class="btn" onclick="contactMe()">Contact Me 🚀</button>
    <button class="btn" onclick="contactMe()">Hire Me 💼</button>
  </div>

  <script>
    // typing effect
    const text = "Software Engineer | Product Thinker | AI Builder";
    let i=0; const speed=60;
    function type(){ if(i<text.length){ document.getElementById('typing').innerHTML+=text.charAt(i); i++; setTimeout(type,speed);} }
    type();

    // mail
    function contactMe(){
      const email = "your.email@gmail.com";
      const subject = "I found you";
      const body = "Hey Aakansha, I found you and would love to connect!";
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }

    // theme toggle
    function toggleMode(){ document.body.classList.toggle('light'); }

    // particles background
    const canvas = document.getElementById('bg');
    const ctx = canvas.getContext('2d');
    let particles = [];
    function resize(){ canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    window.addEventListener('resize', resize); resize();
    for(let i=0;i<80;i++){ particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*2+1,dx:Math.random()-0.5,dy:Math.random()-0.5}) }
    function draw(){
      ctx.clearRect(0,0,canvas.width,canvas.height);
      particles.forEach(p=>{
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fillStyle='white'; ctx.fill();
        p.x+=p.dx; p.y+=p.dy;
        if(p.x<0||p.x>canvas.width) p.dx*=-1;
        if(p.y<0||p.y>canvas.height) p.dy*=-1;
      });
      requestAnimationFrame(draw);
    }
    draw();
  </script>
</body>
</html>
