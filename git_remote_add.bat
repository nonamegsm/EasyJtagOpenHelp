@echo off     

rem Ваш путь к repository !!!!!!!!!!!!    
set mydrive=F:\
set mypath=\GitHub\EasyJtagOpenHelp

rem устанавливаем текущий путь   
cd %mydrive%   
cd %mypath%  

rem смотрим путь на удаленный repository 
git remote add origin https://github.com/nonamegsm/EasyJtagOpenHelp