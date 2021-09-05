
echo "## start"

filenames="$(ls ./src/blogs)"
ogps="$(ls ./static/ogp)"

echo "## processing..."

echo "$filenames" | while read line
do
  if [ ! -e "./static/ogp/ogp_$(echo $line | awk '{print substr($0, 12, (length($0)-15))}').png" ];then
    # substr(string, start, length) では、startからlength文字を取り出す
    sh ./tools/ogp/ogp_maker.sh "$(echo $line | awk '{print substr($0, 12, (length($0)-15))}')"  
  fi
done

echo "## done"
