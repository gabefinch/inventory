require 'rails_helper'

describe Location do
  it { should have_many :ingredients }
  it { should belong_to :parent }
  it { should have_many :children }
  it { should validate_presence_of :name }
end
