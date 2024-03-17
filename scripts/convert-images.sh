#! /bin/bash

tinify () {
    local file=$1

    resp=$(curl https://api.tinify.com/shrink --user "api:"$TINIFY_API_KEY --data-binary "@"$file)
    url=$(echo $resp | jq -r '.output.url')

    wget -O $file $url
}

convertattr () {
    local file=$1
    local thumb=${file/.jpg/.thumb.jpg}

    convert $file -resize x220 $thumb
    convert $file -resize x700 $file

    tinify $file
    tinify $thumb
}

convertbg () {
    local file=$1

    convert $file -resize x1000 $file
    tinify $file
}

convertpath () {
    if [[ $1 == *"/" ]]; then
        echo $1
    else
        echo $1"/"
    fi
}

path=$(convertpath $1)
files=$(find $path -type f)

for file in $files; do
    if [[ $file == *".thumb.jpg" ]]; then
        continue
    fi

    if [[ $file == *".bg.jpg" ]]; then
        convertbg $file
    else
        convertattr $file
    fi
done