---
layout: "../../../layouts/Doc.astro"
title: "Noclip.gg - Custom Domains"
description: "Use a custom domain instead of the default subdomain"
publishDate: "4 Sep 2022"
pubDate: "4 Sep 2022"
---

## Adding a domain to Noclip

### Requirements:
- You **must** own a domain or be ready or purchase a domain through a registrar.
- You need to either have [Noclip Rainbow](https://noclip.me/upgrade) or be a [Noclip Chroma](https://noclip.me/chroma).

### Purchasing a domain

You will need to purchase a domain through a registrar like [Namecheap](https://namecheap.pxf.io/noclip/) or [PorkBun](https://porkbun.com/).


{% callout title="Purchasing a domain" %}
Please refrain from using providers like GoDaddy, as multiple users have reported issues with their service when using a custom domain through them.
{% /callout %}

If you already own a domain you can go ahead and use that for Noclip.

---

### Configuring your forum

You must claim your domain to your forum.

You can do this by going to your **forums dashboard**, under the **settings** tab.
If you can't  find the field for setting your vanity domain, scroll down.
Your vanity domain **can** be a subdomain, like `forum.example.com`.

![Screenshot of Vanity Domain Setting](https://i.imgur.com/jD9lJDp.png)

---

## Domain Configuration

There are 2 ways to add a domain to Noclip, you can either change your Nameservers via your domain control panel or your can create a CNAME record via your DNS settings.

This guide assumes you're not using Cloudflare, if you are follow the additional instructions below.

### How do I make a sub-domain like forums.abc.com?
Follow the A record below, but instead of making an `A` Record, please make a CNAME record as shown below:
```
Type  Name   Value
CNAME forums cname.vercel-dns.com
```


### A RECORD

Via your DNS control panel you can set records specifying your domain to point to Noclip, this is a CNAME record. You can optionally read about CNAME records [here](https://www.cloudflare.com/en-gb/learning/dns/dns-records/dns-cname-record/).

*If you're using GoDaddy this **may** not work*

Log into your domain registars panel, you will find a tab called something similar to `DNS`.

For Namecheap it is under `Account -> Dashboard -> Manage -> Advanced DNS`.

For PorkBun it is under `Domain Management -> Details -> DNS Records`.

Once you're here you will need to create the record for the domain (or sub-domain) that you'd like.

Please make an `A` Record following the code below:
```
Type  Name  Value
A     @     76.76.21.21
```

Each registrars panel may differ from anothers, please make sure to look around and check their support articles. 

### Nameservers

Via your domains control panel, you can change the nameservers of your domain.
This allows Noclip to fully control your domain and add and remove [records](https://www.cloudflare.com/learning/dns/dns-records/).

{% callout title="Nameservers" %}
This is recommended if you plan to use Noclip as the only service on this domain, this is also the easiest for most users to setup. However, this will remove any control over individual records. Noclip will have control over the domain and you will be able to edit anything outside of changing the nameservers off of Noclip.
{% /callout %}

1. Navigate to your domains control panel. (Namecheap's website for example)
2. Locate the section which manages your nameservers.
3. **Replace** your existing nameservers with the ones provided below.
4. Wait for your domain to be added by Noclip staff. (This may take some time)
5. Enjoy 🙂

```
ns1.vercel-dns.com
ns2.vercel-dns.com
```
^ `ns` referrs to nameserver, you can find more information about nameservers [here](https://www.cloudflare.com/en-gb/learning/dns/dns-records/dns-ns-record/).

### Domain Integration

Once you've claimed your domain on the Noclip settings pane and congigured the DNS records for it, it will point to Noclip however, it will be a redirect to `your-forum.noclip.me` as you need to request your domain to be fully integrated by Noclip staff.

This can be done via the Discord.
You require the Rainbow rank to view the required channel, if you do not have this role you need to ask for it. (You will be asked to attach a link to your Noclip profile)

Once you have the Rainbow rank you will need to go the to #domain-request channel and send a message with your domain name in the format of `mydomain.com`.

(you do not need to do the `www` part as it's not used much anymore)

example message: 
```
example.com | Nameserver method
```

Ensure that you've set your forum to use this domain.

## Troubleshooting & More Info

### Support

Support is provided by the community in the Noclip Discord server. You can join that [here](https://discord.gg/xtrSJ4fD2z)

Make sure to accept the rules, you won't be able to chat if you don't.

### Cloudflare

If you are using Cloudflare for your domain for DDOS protection you **MUST** disable Cloudflare's protection for the DNS record Noclip will be accesible via.

You can do this by switching `Proxy status` to the disabled position.
![Cloudflare DNS Dashboard with Noclip CNAME](https://i.imgur.com/p037xSK.png)

### GoDaddy

If the CNAME for Noclip doesn't work and you're using GoDaddy as your registrar this is due to GoDaddy's DNS settings. To get around this you can use the Nameserver method or use an external DNS provider like Cloudflare.

---

### Support

If you encounter any problems with setting up, please join our Discord [here](https://physgun.com/discord).