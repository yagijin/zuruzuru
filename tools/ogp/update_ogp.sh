
echo "## start"
echo "## removing old ogps..."

rm -rf ./static/ogp/

mkdir -p ./static/ogp/

echo "## removed"

filenames="$(ls ./src/blogs)"

echo "## processing..."

echo "$filenames" | while read line
do
  # substr(string, start, length) では、startからlength文字を取り出す
  sh ./tools/ogp/ogp_maker.sh "$(echo $line | awk '{print substr($0, 12, (length($0)-15))}')"
done

echo "## done, all blog's ogps are updated"
