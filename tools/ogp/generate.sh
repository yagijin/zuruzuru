
# imagemagicが入っていないときは終了
if which convert | grep "not found" ; then
  echo "## convert not found.\nplease install imagemagick."
fi

# 長いタイトルの場合折り返す
title="$(echo $1 | fold -20)"

# 文字が入ったマスク画像をOGPサイズの1200x630で生成
convert \
-font "/System/Library/Fonts/ヒラギノ角ゴシック W8.ttc" \
-fill "#121212" \
-pointsize 46 \
-gravity center \
-size 1200x630  \
-background none caption:"$title" mask.png

# デフォルト画像とマスク画像を重ねて出力
composite -compose over ./mask.png ./tools/ogp/materials/template.png ./static/ogp/ogp_"$1".png

# マスク画像を削除
rm ./mask.png

echo "## ogp_$1.png generated"
