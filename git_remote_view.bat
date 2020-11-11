@echo off    

rem Ваш путь к repository !!!!!!!!!!!!   
set mydrive=J:\
set mypath=Evgen\MyGit\GameNode.js\.git

rem устанавливаем текущий путь  
cd %mydrive%  
cd %mypath% 

rem смотрим путь на удаленный repository 
git remote -v
