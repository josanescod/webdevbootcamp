curl -X GET \
  'https://${dc}.api.mailchimp.com/3.0/lists/{list_id}?fields=<SOME_ARRAY_VALUE>&exclude_fields=<SOME_ARRAY_VALUE>&include_total_contacts=<SOME_BOOLEAN_VALUE>' \
  --user "anystring:${apikey}"'
