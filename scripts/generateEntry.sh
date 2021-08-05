for filename in `ls -1 ./src/icons/*.svg` #get the list of files
do
        while read line
        do
               echo $filename $line
        done<$filename
done
