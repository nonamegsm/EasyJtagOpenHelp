@echo off   

rem Ваш путь к repository !!!!!!!!!!!!   
set mydrive=J:\ 
set mypath=Evgen\MyGit 

rem устанавливаем текущий путь    
cd %mydrive%    
cd %mypath%    

rem clone откуда копировать repository  
git clone https://github.com/EvgenProjects/GameNode.js