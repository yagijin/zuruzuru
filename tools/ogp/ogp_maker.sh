
if which convert | grep "not found" ; then
  echo "## convert not found.\nplease install imagemagick."
fi

title="$(echo $1 | fold -20)"

convert \
-font "/System/Library/Fonts/ヒラギノ角ゴシック W8.ttc" -fill "#121212" -pointsize 46 -gravity center \
-size 1200x630 -background none caption:"$title" mask.png

composite -compose over ./mask.png ./tools/ogp/template.png ./static/ogp/ogp_"$1".png

rm ./mask.png

echo "## now, $1"
