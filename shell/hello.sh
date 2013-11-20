#!/bin/bash

# echo "hello world"

#s="hello"
#echo "$s"
#echo $s
#echo "${s}"
#echo $s$s
#echo "$s $s"
#echo '$saa'

x=10
echo $x
echo $x+2
echo `expr $x + 2`
echo `expr $x \* 2`
#echo `expr $x * 2` error
echo `expr \( $x + 5 \) \* 2`

readonly FILE_NAME="hello.sh"

# FILE_NAME="hellow.sh" error

exit 0
