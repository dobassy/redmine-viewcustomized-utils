# Minor hack using "redmine-view-customize"

## Introduction

In Redmine, you can extend the function with Plugin. However, it involves restarting the Redmine server, so it takes a little effort.

The "[redmine-view-customize][view-customized]" plugin is a great plug-in that provides usability customizations with CSS and JavaScript.

This repository stores some `.js` and `.css`.

## Usage

After installing "[redmine-view-customize][view-customized]" plugin, access the web setting screen.

Then, you can activate or deactivate it in units of required functionality. Functions are stored in `./css` of `.js` directory.

## compatibility

I use these functions in Redmine 3.4 by [sameersbn/docker-redmine: Docker Image for Redmine](https://github.com/sameersbn/docker-redmine#version). (As of Aug, 2017)

## References

- [onozaty/redmine-view-customize: View customize plugin for Redmine][view-customized]
- [Redmineのプラグイン「view customize plugin」のカスタマイズ例 - Qiita](http://qiita.com/wfigo7/items/f13a89e1d3522f4a73b6) (in Japanese)

[view-customized]: https://github.com/onozaty/redmine-view-customize "onozaty/redmine-view-customize: View customize plugin for Redmine"
