---
layout: homepage
---

# Goodbye WordPress, hello Jekyll

Hey you!

Raise your hand if any of the following are true:

- You have a simple site
- You like writing in Markdown.
- You use/want to use GitHub.
- You've had _any_ frustrations with WordPress.
- You've cried at the cost of hosting a website that has no more than 6 pages.
- You're a little bit scared of databases.

I accept you may be staring at these words dead-eyed but if you _do_ have a hand in the air then have you ever considered using a flat-file CMS (OK, you can put your hand down now)?

## A what?

You heard.

I've also heard them called 'static site generators', 'flat-file CMSs'. [This article](http://www.typeandgrids.com/blog/goodbye-wordpress-2014-will-be-the-year-of-flat-file-cmses "A move away from WordPress in 2014?") explains it like this:

> A flat-file CMS is a content management system that stores content in files and folders rather than in a database like a traditional CMS

## What's the point?

Apart from the ease of working with just HTML for templating, you can also host your site _for free_ using GitHub pages.

## It's not just me

I've seen a rash of articles (one, maybe two) explaining the benefits of using flat-file CMSs. I decided to try out [Jekyll](http://jekyllrb.com/ "Jekyll"). I'll explain how that went in a moment.

And before you accuse me of bandwagon jumping, I started writing this article before I read [this article on getting started with GitHub Pages](http://24ways.org/2013/get-started-with-github-pages/ "Get Started With GitHub Pages (Plus Bonus Jekyll)"), and definitely before I'd even heard of [this one about the rise of flat file CMSs](http://www.typeandgrids.com/blog/goodbye-wordpress-2014-will-be-the-year-of-flat-file-cmses "A move away from WordPress in 2014?"). 

I can prove it too because the workflow for using Jekyll with GitHub pages means you're forced (in a good way) to use Git for version control.  

## So why now then Mr. Bandwagon Jumper?

A WordPress update failed, that's why.

Yes, I could have just reinstalled WordPress. Yes I could have just recovered the broken database. Actually, I did try _both_ those things but it just felt futile.

All my site had was a few pages, images, and a couple of blog posts that really didn't need reviving. I asked myself this question:

> Do I really _need_ WordPress?

I looked out of the window for inspiration. All I saw was the top of a flat and a pigeon. I turned back to my monitor and looked at the database error. 

> No, I _don't_ need WordPress.

That was that. I decided that it was just too bloated for a simple portfolio site. I'd whiled away many not-particularly-enjoyable hours tip-toeing around PHP code, messing with local servers and not enought time on building the website. I also live in a house with my family and I like to see them now and again (I don't know if the feeling's mutual).

I'd heard a bit about Jekyll and noticed that [Harry Robert's](https://twitter.com/csswizardry) site, [CSS Wizardry](http://csswizardry.com/ "CSS Wizardry")  uses it. 

Time for action...

## Install Jekyll, and hide

Sorry, I had to use that pun. I decided to dive right into installing and using [Jekyll](http://jekyllrb.com/ "Jekyll") straight away.

### Installing Jekyll

This isn't a how-to guide. There are loads of them already. This is a personal account of how it went for me. I've decided to keep it raw and messy to get across how I felt. You can skip this is you want. It contains swearing and exclamation marks:

- Load up the official [Jekyll docs](http://jekyllrb.com/docs/home/). That's easy.
- Open Terminal. Oh God. I knew I'd have to do this. It's OK. It does scare the hell out of me though.
- After an hour of typing gibberish into a black window, it _still_ hasn't installed. Shit. I need _Ruby_, _Sudo_, _Command line Tools_ in _Xcode_ and other stuff I don't understand. _Why?_
- Bugger. I need to update to the latest version of _Ruby_, which I have just done. It hasn't bloody worked. 
- I need to install _Xcode_ (so I can install _Command Line Tools_)? What the hell _for_? WHY? NOOOO! The version of _Xcode_ I tried to download is only for the latest version of Mac OS. Jesus!
- I've got to go to the developer site to get an older version of _Xcode_. The installed file size is over 3.54GB! I don't have that much space left! I need to delete stuff now! Calm down! It's late. Go to bed. And stop talking to yourself.
- I hate the command line
- After waiting several days (that's how it felt) for _Xcode_ to install, it _still_ fails! Why are you doing this to me! I'm now fumbling around the internet and I've managed to install _Command Line Tools_ (didn't have to install _Xcode_ after all, grrr...). I'll just try installing it again and...IT F*CKING WORKED! I've never been so happy to see so much code I don't understand scrolling past me in Terminal. THANK YOU INTERNET!!!
- FOR GOD'S SAKE!!!. It _hasn't_ worked. It HAS NOT WORKED.
- After wiping the blood and tears (no sweat) off the keyboard, and more fumbling around the internet, I've now need to install JSON via the command line too! Why? _WHY?_
- Hmmm, some promising looking messages scrolling past in Terminal. It's stopped scrolling and now I need to install something called _rdiscount_. _Another_ thing to install. ANOTHER THING. What are all these things I need to install?! What are THINGS? I _hate_ the word 'THINGS'. Anyway, I think if I was told I'd need to install something called _virus.exe_ I just do it blindly. I'm feeling desperate now.
- OH SWEET JESUS! It worked! I think it _really_ worked!

You get the picture. It was a pain.

## Working with it

Once it was installed, it was very easy to work with. You can follow a tutorial on the official [Jekyll](http://jekyllrb.com/docs/home/) site.

As it's based on flat files, it's _very_ easy to get going with and this also makes it easy to fit in with a SASS/LESS workflow as there's very little to get in the way.

## Hosting with GitHub Pages

Another benefit of doing it this way is that you can host your site on GitHub Pages. This is also _very_ easy to do and you can even use a custom domain name.

You can find more detailed info on [Hosting your site or portfolio on github](http://benhowdle.im/2013/11/21/hosting-your-site-or-portfolio-on-github/).

### Pros

- It's free
- It's easy to deploy to (depending on your set-up).

### Cons

- The source code for your site is available to everyone. This may not be an issue for you but it's something to be aware of.
- May not be suitable for dynamic websites or apps.

## Pros and cons of using Jekyll

### Pros

- If you are working on a static site, there's no need to worry about CMSs or databases. 
- You can easily store the code on GitHub for version colleague.

### Cons

- For a command-line-aphobe like me there was a lot of command line tinkering and dependencies that were needed to set it up.

## My new workflow

These are the tools I use:

- Jekyll. This is installed and running in the background so I can view the generated code locally.
- GitHub for mac. My local files are set as the working folder so any changes I make are ready to commit to my repository.
- GitHub pages. I've set up up GitHub pages for my Jekyll site to live and have used my own custom domain.

This is an overview of how my workflow works from local change to live on the website:

1. Open up terminal and get Jekyll running. Set it to watch local files so I can view (compiled?) changes on a local server.
2. Open CodeKit where my SCSS files are processed.
3. Make my changes to local HTML and CSS files stored on my hard drive, set as a GitHub repository.
4. Using GitHub for Mac, commit all changes to live. This adds the latest code to the repository and deploys them to my website.
5. Smile.

## Summary

- Complete bitch to set up for someone like me.
- Worth the effort so far.

Making changes is easy and fits in better with my current workflow. WordPress is an excellent CMS but for a static site like mine, it's overblown.

## Resources

- [A move away from WordPress in 2014?](http://www.typeandgrids.com/blog/goodbye-wordpress-2014-will-be-the-year-of-flat-file-cmses)
- [Getting started with the official Jekyll documentation](http://jekyllrb.com/docs/home/)
- [Hosting your site or portfolio on github](http://benhowdle.im/2013/11/21/hosting-your-site-or-portfolio-on-github/)