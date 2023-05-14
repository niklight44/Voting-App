import firebase_admin
from firebase_admin import db

def create_data(request):
    # get the data from the request
    data = request.POST.get('data')

    # get a reference to the database node where you want to store the data
    ref = db.reference('path/to/node')

    # add the data to the database
    new_ref = ref.push(data)

    return JsonResponse({'success': True, 'key': new_ref.key})

def read_data(request, key):
    # get a reference to the database node where the data is stored
    ref = db.reference('path/to/node/' + key)

    # read the data from the database
    data = ref.get()

    return JsonResponse(data)

def update_data(request, key):
    # get the data from the request
    data = request.POST.get('data')

    # get a reference to the database node where the data is stored
    ref = db.reference('path/to/node/' + key)

    # update the data in the database
    ref.set(data)

    return JsonResponse({'success': True})

def delete_data(request, key):
    # get a reference to the database node where the data is stored
    ref = db.reference('path/to/node/' + key)

    # delete the data from the database
    ref.delete()

    return JsonResponse({'success': True})
