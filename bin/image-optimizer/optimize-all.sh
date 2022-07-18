if which mogrify | grep "not found" ; then
  printf "## mogrify not found.\nplease install imagemagick."
fi

# $1配下の全てのpngのEXIF情報を削除
cd "$1" || exit
mogrify -strip ./*.png
