
# 開始
echo "## start: update ogp"

# blogのmarkdownファイルのファイル名を変数に入れる
filenames="$(ls ./src/markdowns/blogs)"

echo "$filenames" | while read line
do
  # 先頭11文字の日付と後部の拡張子を除く
  basename="$(echo ${line:11} | xargs basename -s .mdx | xargs basename -s .md)"

  # すでにogp画像が存在する場合はなにもしない
  # 存在しない場合、genarate.shで作成する
  if [ ! -e "./static/ogp/ogp_$basename.png" ];then
    sh ./tools/ogp/generate.sh $basename  
  fi
done

# 終了
echo "## done : updated all"
