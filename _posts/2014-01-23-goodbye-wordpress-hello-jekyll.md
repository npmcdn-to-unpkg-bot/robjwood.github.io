---
layout: blog-post
---

# Goodbye WordPress, hello Jekyll

<p class="intro">Jekyll is a great choice for a simple static site but the evil Mr. Hyde of this story is the installation.</p>

While installing a security update for WordPress the auto-update failed. After taking my head out of my hands I decided to give [Jekyll](http://jekyllrb.com/ "Jekyll") a go. I'd heard about it from Harry Roberts's excellent site, [CSS Wizardry](http://csswizardry.com/ "CSS Wizardry"). I didn't know much about it but saw it as a way of creating a template for a website without needing PHP or a database.

I thought 'What could possibly go wrong?' and gave it a go...  

## Installing Jekyll

This is most definitely _not_ a how-to guide. This is a personal account of how it went for me. It contains swearing, the present tense and exclamation marks:

- **Load up the official [Jekyll docs](http://jekyllrb.com/docs/home/).** That bit's easy.
- **Open Terminal.** Oh God, I just _knew_ I'd have to use this. It scares me. After an hour of typing gibberish into a black window, it _still_ hasn't installed. Shit.
- **I have to install _Ruby_, _Sudo_, _Command line Tools_ in _Xcode_ and other stuff.** I have no idea why but I don't think I have a choice.
- **Update to the latest version of _Ruby_.** Bugger. It didn't work. 
- **Install _Xcode_.** Er, OK. It's so I can install _Command Line Tools_ apparently? What the hell _for_?
- **Fail to install _Xcode_** NOOO! The version of _Xcode_ I tried to download is only for the latest version of Mac OS. Great. My 2007 MacBook isn't supported by the latest OS either.
- **Install older version _Xcode_.** I've got to go to the developer site and try to find it. The installed file size is over 3.54GB! I don't have that much space left on my hard drive! I need to delete some stuff before I can carry on! It's late. Go to bed. And stop talking to yourself.
- **Try to Install _Xcode_ again.** After waiting for what felt like _hours_ it to install, it _still_ fails! Why?! I'm now fumbling around the internet and I've managed to install _Command Line Tools_ (I didn't have to install _Xcode_ after all). I'll just try installing it again and...IT F*CKING WORKED! I've never been so happy to see so much code I don't understand scrolling past me in Terminal. Hold on...OH FOR GOD'S SAKE!!!. It _hasn't_ worked. It HAS NOT WORKED.
- **Install JSON.** After _more_ fumbling around the internet, I now need to install JSON via the command line too! Why? Why does it _have_ to be the command line?
- **Install something called _rdiscount_.** What the hell is this now? _Another_ thing to install. ANOTHER THING. What are all these things?! I _hate_ 'THINGS'. I'm feeling desperate now. If I was told to install something called _virus.exe_ I think I'd just do it. 
- **Celebrate** OH SWEET JESUS! It worked! It _actually_ worked!

Yep, it was a pain in the arse.


## Was it worth it?

Apart from being able to work primarily with HTML for writing templates, you can also host your site _for free_ using GitHub pages. This is easy to do and you can use your own custom domain name. 

It takes a little setting up but this makes deployment easy. Just commit your changes to GitHub (in a specially named branch) and the files are deployed. You can find more detailed info on [how to host your site or portfolio on github](http://benhowdle.im/2013/11/21/hosting-your-site-or-portfolio-on-github/).

Once you're set up, it's easy to work with. You can follow a tutorial on the official [Jekyll](http://jekyllrb.com/docs/home/) site to see what I mean. As it's based on flat files, it's _very_ easy to get going with and this also makes it easy to fit in with a SASS/LESS workflow as there's little to get in the way.

## Things to think about 

Unless you pay for a private GitHub account, your source code will be available for the world to see. It's up to you to deide if this is a problem.

Also, this won't work if you have a dynamic website. Stick with WordPress for that.

## Summary

Here's my short summary on using Jekyll for a small website:

- Complete pain to set up for someone allergic to the command line like me.
- Definitely worth the effort.

## Useful links

- [A move away from WordPress in 2014?](http://www.typeandgrids.com/blog/goodbye-wordpress-2014-will-be-the-year-of-flat-file-cmses)
- [Getting started with the official Jekyll documentation](http://jekyllrb.com/docs/home/)
- [Hosting your site or portfolio on github](http://benhowdle.im/2013/11/21/hosting-your-site-or-portfolio-on-github/)
- [Setting up a custom domain name](https://help.github.com/articles/setting-up-a-custom-domain-with-pages)
