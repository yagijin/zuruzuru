
if which convert | grep "not found" ; then
  echo "## convert not found.\nplease install imagemagick."
fi

# $1のEXIF情報を削除
convert $1 -strip $1
