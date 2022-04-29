
echo "## start: update ogp"

# blogのmarkdownファイルのファイル名を変数に入れる
filenames="$(ls ./src/blogs)"
ogps="$(ls ./static/ogp)"

echo "## processing..."

echo "$filenames" | while read line
do
  # すでにogp画像が存在する場合はなにもしない
  # substr(string, start, length) で、startからlength文字を取り出す
  if [ ! -e "./static/ogp/ogp_$(echo $line | awk '{print substr($0, 12, (length($0)-15))}').png" ];then
    
    sh ./tools/ogp/generate.sh "$(echo $line | awk '{print substr($0, 12, (length($0)-15))}')"  
  fi
done

echo "## done : updated all"
