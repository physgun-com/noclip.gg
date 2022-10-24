---
layout: "../../../layouts/Doc.astro"
title: "Noclip.gg - Creating a action"
description: "Deep dive into Noclip's actions, get the most out of our store!"
publishDate: "4 Sep 2022"
pubDate: "4 Sep 2022"
---

## Introduction
Actions are powerful ways to tell Noclip what to do when a user purchases a package. For instance, you can give someone a rank, add darkrp cash to their wallet, or even run a custom console command. Lets get into it!

### Replacement strings
Replacement strings are an elegant way of getting a players steamid without knowing who purchased it before hand. This is useful for both developers and community owners. We can run console commands or even custom lua through Noclip. Allowing us to very easily run a command that Noclip does not natively support!

Our current supported replacement strings are:

```
{player.name}
{player.steamID}
{player.steamID64}
{purchase.amount}
```

{% callout title="You should know" %}
When using replacement strings they must be used exactly how they look, if they do not have the brackets (`{}`) they will not work as intended.
{% /callout %}
---

## Supported actions

## Console command
Console commands allow you to run a command that is typically run in the console. Many addons support this type of interaction, we'll show an example here:

```LUA
voidcases_giveitem {player.steamID64} 1 2
```

In this example we are using void cases, giving the player who purchased an item based on their SteamID. You can always ask the developer of the addon you want supported in question what console commands their addon has. We will also try to add some common console commands in our documentation aswell.

## DarkRP cash
Add money to a players wallet when they donate, beware this can break your database if you set a number too high.

## Pointshop 1 points
Pointshop points can be added to a player, beware this can break your database if you set a number too high.

## Pointshop 2 points
Noclip also has support for pointshop 2, which points can be added to a player, beware this can break your database if you set a number too high.

## Pointshop 2 premium points
Pointshop 2 premium points can be added to a player, beware this can break your database if you set a number too high.

---

### FAQ

## Voidcases

Example:
```
voidcases_giveitem {player.steamID64} YOUR_ITEM_ID YOUR_AMOUNT
```

## Project0 Weapon Customizer
Example:
```
pz_addskin {player.steamID64} YOUR_SKIN_ID [weaponClass or "*"]
```

## Easy Skins
Example:
```
easyskins_giveskin {player.steamID64} < skinName|skinID|skinCategory > < weaponClasses|categories >
```

```
easyskins_giveskin {player.steamID64} DarkWave S.T.A.L.K.E.R "[TFA] Star Wars"
```

## Advanced Accessory
Example:
```
aas_give_items_steamid64({player.steamID64}, uniqueId)
```

## Suggest an addon
If we don't have a console command you can use, feel free to let us know in our discord!

---

### Support

If you encounter any problems with setting up, please join our Discord [here](https://physgun.com/discord).