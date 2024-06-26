# 깃 연동하기

1. git 저장소 초기화 - git init
2. git add / commit
3. 로컬 저장소와 원격 저장소 연경하기 git remote
   ```
   git remote add origin URL
   ```
4. git push

   ```
   로컬 저장소에서 변경한 내용을 원격 저장소에 업로드하기 위해서는 'git push' 명령어를 사용해야 합니다.

    $ git push -u [원격 저장소 이름] [로컬 저장소의 브랜치 이름]
    [원격 저장소 이름] 은 git remote add 명령어에서 설정한 원격 저장소의 별칭입니다.

    [로컬 저장소의 브랜치 이름] 은 로컬 저장소에서 push 할 브랜치 이름입니다.

    따라서, origin 이라는 이름으로 연결한 원격 저장소에 현재 브랜치를 push 하려면 위 사진처럼 입력하면 됩니다.

    (※ 맨 처음 로컬 브랜치를 원격 저장소의 브랜치와 연결할 때만 -u 옵션을 사용하면 됩니다. -u 옵션은 추적 설정을 완료하고 나면 다시 사용할 필요가 없습니다. 오히려, 다시 사용하면 중복된 추적 설정이 발생할 수 있습니다.)
   ```
