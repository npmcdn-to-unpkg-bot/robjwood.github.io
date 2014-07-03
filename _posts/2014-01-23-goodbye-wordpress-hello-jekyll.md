---
layout: blog-post
---

# Goodbye WordPress, hello Jekyll

<p class="intro">Jekyll is a great choice for a simple static site but the evil Mr. Hyde of this story is the installation.</p>

While installing a security update for WordPress the auto-update failed. After taking my head out of my hands I decided to give [Jekyll](http://jekyllrb.com/ "Jekyll") a go. I'd heard about it before from reading Harry Robert's site, [CSS Wizardry](http://csswizardry.com/ "CSS Wizardry") but the extent of my knowledge of it can be summed up by this description from [Type &amp; Grids](http://www.typeandgrids.com/blog/goodbye-wordpress-2014-will-be-the-year-of-flat-file-cmses "A move away from WordPress in 2014?"): 

> A flat-file CMS is a content management system that stores content in files and folders rather than in a database like a traditional CMS

I thought 'What could possibly go wrong?' and gave it a go...  

## Installing Jekyll

This is most definitely _not_ a how-to guide. This is a personal account of how it went for me. It contains swearing and exclamation marks:

- **Load up the official [Jekyll docs](http://jekyllrb.com/docs/home/).** That's easy.
- **Open Terminal.** Oh God, I just _knew_ I'd have to do this. It's OK but it does scare the hell out of me. After an hour of typing gibberish into a black window, it _still_ hasn't installed. Shit.
- **Install _Ruby_, _Sudo_, _Command line Tools_ in _Xcode_ and other stuff.** _Why?_
- **Update to the latest version of _Ruby_.** Bugger. It hasn't bloody worked. 
- **Install _Xcode_.** Er, OK. It's so I can install _Command Line Tools_ apparently? What the hell _for_? WHY?
- **Cry a lot.** NOOOO! The version of _Xcode_ I tried to download is only for the latest version of Mac OS. Great. My 2007 MacBook isn't supported by the latest OS either.
- **Install older version _Xcode_.** I've got to go to the developer site and try to find it. The installed file size is over 3.54GB! I don't have that much space left on my hard drive! I need to delete stuff now! Calm down! It's late. Go to bed. And stop talking to yourself.
- **I hate the command line**
- **Try to Install _Xcode_ again.** After waiting several days (that's how it felt) for _Xcode_ to install, it _still_ fails! Why are you doing this to me! I'm now fumbling around the internet and I've managed to install _Command Line Tools_ (didn't have to install _Xcode_ after all, grrr...). I'll just try installing it again and...IT F*CKING WORKED! I've never been so happy to see so much code I don't understand scrolling past me in Terminal. THANK YOU INTERNET!!!
- **Cry a lot (again).** FOR GOD'S SAKE!!!. It _hasn't_ worked. It HAS NOT WORKED.
- **Install JSON.** After wiping the blood and tears (no sweat) off the keyboard, and more fumbling around the internet, I now need to install JSON via the command line too! Why? _WHY?_
- **Install something called _rdiscount_.** What the hell is this now? _Another_ thing to install. ANOTHER THING. What are all these things I need to install?! What are THINGS? I _hate_ the word 'THINGS'. Anyway, I think if I was told I'd need to install something called _virus.exe_ I just do it. I'm feeling desperate now.
- **Celebrate wildly** OH SWEET JESUS! It worked! I think it _really_ worked!

You get the picture. It was a pain.

## Why bother?

Apart from being able to work primarily with HTML for writing templates, you can also host your site _for free_ using GitHub pages. 

I've seen a rash of articles (one, maybe two) explaining the benefits of using flat-file CMSs. I decided to try out [Jekyll](http://jekyllrb.com/ "Jekyll"). I'll explain how that went in a moment. And before you accuse me of bandwagon jumping, I started writing this article before I read [this article on getting started with GitHub Pages](http://24ways.org/2013/get-started-with-github-pages/ "Get Started With GitHub Pages (Plus Bonus Jekyll)"). And definitely before I'd heard of [this one about the rise of flat file CMSs](http://www.typeandgrids.com/blog/goodbye-wordpress-2014-will-be-the-year-of-flat-file-cmses "A move away from WordPress in 2014?"). I'm just a slow writer.  
    

## Working with it

Once I'd installed Jekyll, it was easy to work with. You can follow a tutorial on the official [Jekyll](http://jekyllrb.com/docs/home/) site to see what I mean. As it's based on flat files, it's _very_ easy to get going with and this also makes it easy for it to fit in with a SASS/LESS workflow as there's little to get in the way.

## Hosting with GitHub Pages

This is one of the best bits. You can host your site on GitHub Pages for free. This is also easy to do and you can even use your own custom domain name. 

It takes a small amount of setting up but this makes deployment easy. Just commit your changes to GitHub (in a specially named branch) and the files are deployed. You can find more detailed info on [how to host your site or portfolio on github](http://benhowdle.im/2013/11/21/hosting-your-site-or-portfolio-on-github/).

## Things to think about 

Unless you pay for a private GitHub account, your source code will be available for the world to see. Is this a big problem? That's up to you to decide.

Also, this won't work if you have a dynamic website. Stick with WordPress for that.

## Summary

Here's my short summary on using Jekyll for a small website:

- Complete bitch to set up for someone allergic to the command line like me.
- Definitely worth the effort.

Making changes is easy and fits in better with my current workflow than WordPress. While it's an excellent CMS, WordPress is just too overblown for a static site like mine.

## Useful links

- [A move away from WordPress in 2014?](http://www.typeandgrids.com/blog/goodbye-wordpress-2014-will-be-the-year-of-flat-file-cmses)
- [Getting started with the official Jekyll documentation](http://jekyllrb.com/docs/home/)
- [Hosting your site or portfolio on github](http://benhowdle.im/2013/11/21/hosting-your-site-or-portfolio-on-github/)
- [Setting up a custom domain name](https://help.github.com/articles/setting-up-a-custom-domain-with-pages)
