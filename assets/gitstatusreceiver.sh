IFS=$'\n' read -r -d '' -a my_array < <(git diff --name-only && printf '\0')
