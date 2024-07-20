const animateText = new SplitType('.animate-text');
let tl = gsap.timeline();

tl.from('.char', {duraction: .3, delay: .6, opacity: 0, y: 20, stagger: .15, ease: 'power1.in'});
tl.from('.text', {duraction: .3, opacity: 0, y: 20, ease: 'power1.in'});
tl.from('.items__item', {duraction: .3, opacity: 0, y: 20, stagger: .15, ease: 'power1.in'});
tl.from('.boxes__item', {duraction: .3, opacity: 0, y: 20, stagger: .15, ease: 'power1.in'});
tl.from('.attribution', {duraction: .3, opacity: 0, y: 20, ease: 'power1.in'});