@echo off  

rem Ваш путь к repository !!!!!!!!!!!! 
set mydrive=J:\
set mypath=Evgen\MyGit\GameNode.js 

rem Проверяем => путь должен существовать 
if not exist %mydrive%%mypath% ( 
       echo Error! Folder %mydrive%%mypath% not exist 

       rem ждем нажатие любой клавиши чтобы выйти  
       pause 
       exit 
) 

rem устанавливаем текущий путь 
cd %mydrive% 
cd %mypath% 

rem Проверяем => текущий путь не должен содержать .git 
if exist .git ( 
       echo Warning! .git already exist. %mydrive%%mypath%\.git 

       rem ждем нажатие любой клавиши чтобы выйти  
       pause 
       exit 
) 

rem create repository 
git init 

rem ждем нажатие любой клавиши чтобы выйти  
pause