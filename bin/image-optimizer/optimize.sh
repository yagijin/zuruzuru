
if which convert | grep "not found" ; then
  echo "## convert not found.\nplease install imagemagick."
fi

# $1のEXIF情報を削除
convert $1 -strip $1

# webpに変換
filename=`echo $1 | sed -E 's/.png|.jpg|.jpeg|.gif/.webp/'`
echo $filename
convert $1 $filename
